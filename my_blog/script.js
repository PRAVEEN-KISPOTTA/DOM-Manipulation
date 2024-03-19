const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog){
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";

    const blogHeader = document.createElement("div");
    blogHeader.className = "blog-header";

    const blogTitle = document.createElement("h2");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.title;

    const blogDate = document.createElement("p");
    blogDate.className = "blog-date";
    blogDate.textContent = blog.date;
    console.log(blog.date)

    const blogContent = document.createElement("p");
    blogContent.className = "blog-content";
    blogContent.textContent = blog.content;

    blogHeader.append(blogTitle, blogDate, blogContent);
    blogPost.append(blogHeader, blogContent);
    // blogPost.appendChild(blogContent);

    const blogList = document.querySelector(".blog-list");
    blogList.appendChild(blogPost);
}
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh
blogData.forEach(data=>{
    addBlog(data);
})

//----------------------------------------------------------------------------------------

const blogList = document.querySelector("ul")

blogList.addEventListener("click", clicked);

function clicked(){
    console.log("clicked");
}