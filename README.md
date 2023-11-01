# [mourning](https://github.com/byteforgecn/mourning/tree/main#mourning) 哀悼日

> 一个在哀悼日会让网站变灰, 并且显示指定内容的脚本.
>
> A script that greys the site and displays specified content on a day of mourning.

中国的哀悼日是指全国范围内为了纪念和哀悼重大的国家灾难、重大人员伤亡事件或国家重要人物去世而设立的特殊日子。在这一天，全国人民都会通过默哀、降半旗、停止娱乐活动等方式来表达对逝者的哀悼和对国家的悲痛之情。

China's mourning day refers to a special day set up nationwide to commemorate and mourn major national disasters, major casualties or the death of important national figures. On this day, people across the country observe a moment of silence, fly flags at half-mast and stop entertainment activities to express their grief for the deceased and the nation.

------

你可以自定义日期, 文字, 持续时间, 可以满足任意国家哀悼日的需求. 哀悼行为并不狂热, 我们应当心怀感恩, 铭记历史.

You can customize the date, the text, and the duration to meet the needs of any national mourning day. Mourning is not fanatical. We should be grateful and remember history.


### Effect 效果

![灰](https://github.com/byteforgecn/mourning/assets/144019326/9c8956e4-589c-4dcc-bd7c-968f412c716a)

![正常](https://github.com/byteforgecn/mourning/assets/144019326/aacba653-712e-4b34-b34a-d7e252cea801)


### Usage 用法

| key      | unit                                    |
| -------- | --------------------------------------- |
| days     | 0404,0512,1213  4月4日 5月12日 12月13日 |
| duration | 毫秒 milliseconds                       |
| text     | 🕯沉重悼念 文本内容                      |

```html
以下内容可以直接复制到你网站的header中使用, 你可以自定义days的日期为今天来测试效果
The following can be copied directly into the header of your website, and you can customize the date of days to be today to test the effect

<script defer src="https://fastly.jsdelivr.net/gh/byteforgecn/mourning@0.0.2/mourning.min.js" days="0404,0512,1213" duration="10000" text="🕯沉重悼念"></script>
```

![halo](https://github.com/byteforgecn/mourning/assets/144019326/434a8c1c-3c20-4143-ae6c-4e6c6a2d45ea)

![alist](https://github.com/byteforgecn/mourning/assets/144019326/7eeb0f15-1b22-48df-8a77-ba31b6e71784)
