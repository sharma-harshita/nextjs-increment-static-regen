## Static Site Generation :
    1. It is a method of pre-rendering where the HTML pages are generated at the time of build.
    2. These pre-rendered static pages can be pushed to CDN, cached and served  to client across the globe instantly.
    3. Static content is fast and better for SEO as they are immediately indexed by Search Engines.
    4. Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages  seems like a good approach to a wide variety of applications.


## ISSUES with SSG : 
    1. The build time is proportional to the number of pages in application.
    2. A page once generated , can contain stale (old) data till the time we rebuild the application.


**Problem** is that even when you will modify the data in products.json file even after that it will not reflect in browser because once it is loaded or the pages are build or pre-rendered after that you can not render or referesh the page again. When you are running in dev env each refresh is new request , so in local you will see the result. So to see this problem first create the build and then run the application.


## ISR : Incremental Static Re-Generation

There is a need to update those pages which needed a change without having to rebuild the entire application.

With ISR, Next.JS allows you to update static pages after you have built the application . This solves the problem of stale data 

In getStaticProps function , when we are returning the props ,we can return one more parameter named as `revalidate` , It will have a numeric value, this value will be in seconds, that after how many seconds you want to rebuild the application.