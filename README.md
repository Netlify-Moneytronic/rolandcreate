**Documentation**

****TLDR **
**
Cloned the existing contentful starter project to my local machine, cd into that folder and ran npm install, added my Contentful details and ran the two servers locally to create a repeateable Demo.
￼
**Working with git**


1.	git clone https://github.com/netlify-templates/nextjs-contentful-starter.git

2.	cd into that folder 

3.	npm install to download the all the libraries used as defined in package.json

4.	Next i added the contentful api tokens to the env file and made sure the added the stackbit configuration to the divs that i wanted to be editable with contentful.

**Adding Tags**


Adding a tag like data-sb-object-id={props.id} is an example of how you would annotate an element so it can be populated and recognized by tools like Netlify Create (Visual Editor) when using Contentful as a content source
The data-sb-object-id attribute should be set to the unique ID of the Contentful entry you want to associate with that element. In Contentful 

**Demo Developer WorkFlow Setup**

5.	For the developer workflow i ran 

npm run import
To copy the data from the repo to my Contentful Space


npm run dev 
which runs the site locally 


npm run stackbit
which runs the Stackbit netlify create locally as well in another server

Note:-
The cloudwork flow is what the marketeers would use but that appears not to be working at the moment.

Repeatable demo is now available by repeating the steps above.

https://github.com/Netlify-Moneytronic/rolandcreate

Live site:-

[Visit the live site](https://euphonious-bublanina-23a703.netlify.app)













