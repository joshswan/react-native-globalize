# Performance

React Native Globalize is designed with performance in mind. Intelligent defaults and careful optimizations generally make it you can focus on your app instead of on performance optimization. However, there are a few key concepts to understand so that you don't run into issues while using React Native Globalize.

## Loading Locale Data

As mentioned in the [Getting Started](getting-started.md) guide, no locale data (also known as CLDR data) is loaded by React Native Globalize by default. Selecting locales and loading the data from the `locale-data` folder is left entirely up to you. This is great because you can load as much or as little as you need for your particular use case, without wasting time on processing data for locales you're never going to use.

However, there is one important lesson regarding locale data: ***only load what you need***.

When you invoke `loadCldr` with locale data, the data must be unpacked, parsed, and stored in memory by the library. Thus, there is a small additional cost (both in terms of startup time and memory usage) for each locale that is loaded. In general, this is completely negligible for most use cases, but definitely something to be aware of before you try to load all 350 locales just in case.

If you need to support a large number of different locales in your app, check out the [advanced](advanced.md) guide for a strategy that keeps loading to a minimum on startup.

## Formatting Functions

This is another area where sensible defaults will cover you in almost every case. However, knowing more about the costs associated with building the formatters can help you avoid getting into trouble in more complex situations. In order to create a formatting function, the locale data for that particular type of value must be combined with the data regarding the various options specified. Then a function is created such that a value can be formatted according to those rules.

This leads to the important lesson for this section: ***creating a formatting function takes MUCH longer than formatting a value with that function***.

To avoid slowing apps down to a crawl, React Native Globalizes memoizes all the formatter creator functions. Therefore, calling `formatDate()`, for example, causes a new formatting function to be created, which takes a bit of time. However, if you call `formatDate()` again with the same options, React Native Globalize uses the previously built formatter and outputs the result in a flash.

As a result, you really shouldn't need to worry about your usage of the formatting functions. But it could come in handy to know that each time you change the options, even slightly, a new function must be constructed, which could make your component slow if you're using a lot of different formatters with different options.

If you need peak performance in a particular component that uses particular formatters repeatedly, check out the [advanced](advanced.md) guide to learn how to get direct access to a formatter function.
