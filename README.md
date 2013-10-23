card-ui.js
===============================

##Installation
copy css/ and js/ directories into your projects

##Usage
'''html
<div class="card">
	<div class="card-content">
		<h1>RobustImageView</h1>
		<p>
			Originally a free mobile app to obtain updatest HKUST courses' registration data. Now developed to a deriative website for course rating and review.
		</p>
	</div>
</div>
'''

##On
on the bottom of your .html file, add the following script to enable flow-in animation for first n cards:

'''javascript
<script type="text/javascript">
/*init first two card*/
$(".card").slice(0,2).addClass("flow-in");

</script>
'''