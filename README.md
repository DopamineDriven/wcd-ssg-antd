# wcd-ssg-antd 🐜🐜SSG🐜🐜BUILD🐜🐜

## Default Antd styling by component
- https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

## generate JSX from .svg files via the command line
```git
$ npx @svgr/cli --icon Logo.svg
```
## [name].module.css - component level styles 
- https://nextjs.org/blog/next-9-2#built-in-css-module-support-for-component-level-styles

## Deep Dive - Rendering on the Web *READ THIS* &rarr; yes, the reader 
- https://developers.google.com/web/updates/2019/02/rendering-on-the-web

## Use less with antd
- https://ant.design/docs/react/customize-theme
- https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
- https://annacoding.com/article/2cU5baQMXG8SV2pbxh7kO8/How-to-config-Ant-Design--in-Next.js-with-custom-theme?
- https://clrs.cc/


### Next vs Gatsby vs CRApp
- https://leerob.io/blog/nextjs-gatsby-create-react-app

```ts
const users: User[] = [
	{
		id: "1",
		name: "Andrew Ross",
		role: "CTO",
		email: "andrew@windycitydevs.io",
		github: "https://github.com/DopamineDriven",
		twitter: "https://twitter.com/Dopamine_Driven",
		linkedin: "https://www.linkedin.com/in/asross/",
		image: "/assets/cropped-a.jpg",
		content:
			'"The mechanic that would perfect his work must first sharpen his tools." - Confucius',
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: "03-11-1992"
	},
	{
		id: "2",
		name: "Joe Shields",
		role: "CEO",
		email: "joe@windycitydevs.io",
		github: "https://github.com/JShields30",
		twitter: "https://twitter.com/JShields312",
		linkedin: "https://www.linkedin.com/in/jshields90/",
		image: "/assets/Joe.jpg",
		content:
			'"A leader gives articulation of the imagination of the population" - Jordan Peterson',
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: ""
	},
	{
		id: "3",
		name: "Yong Lee",
		role: "COO",
		email: "yong@windycitydevs.io",
		github: "https://github.com/yhlee-dho",
		twitter: "https://twitter.com/YongLee08380800",
		linkedin: "https://www.linkedin.com/in/yong-lee-a16430193/",
		image: "/assets/yong.jpg",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
		coverphoto: "/assets/next-jamstack.jpg",
		birthday: ""
	}
];
```