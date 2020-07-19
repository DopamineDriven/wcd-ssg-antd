---
title: "Nextjs, TypeScript, Vercel, GraphQL, and Apollo - Nextgen Static Site Generation"
excerpt: "A brief overview outlining technology stacks of the future"
coverImage: "https://res.cloudinary.com/asross311/image/upload/v1594138140/ASR_Assets/typescript-in-react_vv81ae.png"
date: "2020-07-06T09:37:07.322Z"
author:
  name: Andrew Ross
  picture: "https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png"
ogImage:
  url: "https://res.cloudinary.com/asross311/image/upload/v1594138140/ASR_Assets/typescript-in-react_vv81ae.png"
---

## Overview

First and foremost, TypeScript puts the super in superset, especially in a team environment. State management in React can be cumbersome, which is why I consider GraphQL and Apollo to be the dynamic duo. That said, Redux and Recoil each have their use-cases as well. As far as primary prebuilts are concerened, the "Next.js" framework is top-notch. It removes the otherwise tedious process of manually configuring Webpack to support a server-side rendering app from the equation. It saves time, streamlines optimization, and is blazing fast to enhance end-user experience. 

## TypeScript

TypeScript is a JavaScript superset, it supports additional properties such as annotations, decorators, generics, interfaces, enums, modules, tuples, and more. It offers a uniqe advantage of having preconfigured polyfill support. How? There is a primary tsconfig.json file in the root of every TypeScript project. Within this file, the "target" key has a corresponding value that specifies the ECMAScript target version (JavaScript's actual name) which the TypeScript will be compiled into on build. So, while we are enjoying the benefits of coding with modern syntax (ESNext), this code compiles down to ES5 (2009) JavaScript upon generating a production build. Why does this matter? This greatly bolsters the accessibility of the platform for users still running legacy operating systems or using legacy browsers. For example, Microsoft just terminated support for Windows 7 users and Internet Explorer 11 which means that they will no longer receive updates. By compiling down to ES5, this content is just as accessible to legacy users as it is to users running more current software. The other plus? No longer having to rely on often bulky polyfill libraries.
