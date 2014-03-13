card-ui.js
===============================
![screencap](https://www.dropbox.com/s/fu05knwn6v3howp/Screenshot_2014-03-13-23-17-29.png)
##Installation
copy css/ and js/ directories into your projects

##Usage
```html
<div class="card">
	<div class="card-content">
		<h1>Title</h1>
		<p>
			An implementation of Google's card UI by javascript. Default supporting onScroll animation.
		</p>
	</div>
</div>
```

##OnScroll animation
on the bottom of your .html file, add the following script to enable flow-in animation for first n cards:

```javascript
<script type="text/javascript">
/*init first two card*/
$(".card").slice(0,2).addClass("flow-in");

</script>
```
