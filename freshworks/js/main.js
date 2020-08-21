
var products= document.querySelectorAll('.single_product');
	products.forEach((product)=>{
		product.addEventListener('mouseover', ()=>{
			product.style.marginTop= '-2px';
			product.style.boxShadow= '0px 0px 5px rgba(0, 0, 0, 0.10)';
		});
		product.addEventListener('mouseout', ()=>{
			product.style.marginTop= '+2px';
			product.style.boxShadow= '';		
		});
	})

var blogs= document.querySelectorAll('.content6 .more_info .blog');
	blogs.forEach((blog)=>{
		blog.addEventListener('mouseover', ()=>{
			blog.style.marginTop = '-6px';
		});
		blog.addEventListener('mouseout', ()=>{
			blog.style.marginTop = '+6px';
		});
	})


var index= 0;

var views= document.querySelectorAll('.content5 .view');
	views_length= views.length;
	views[index].style.display= 'block';

var previous= document.querySelector('.content5 .carousel .span1')
var next= document.querySelector('.content5 .carousel .span2')

	previous.addEventListener('click',()=>{
		views[index].style.display= 'none';
		if (index == 0){
			index= views.length- 1;
		}
		else{
			index -=1;
		}
		views[index].style.display= 'block';
	})
	next.addEventListener('click',()=>{
		views[index].style.display= 'none';
		if (index == views.length- 1){
			index= 0;
		}
		else{
			index +=1;
		}
		views[index].style.display= 'block';
	})

	