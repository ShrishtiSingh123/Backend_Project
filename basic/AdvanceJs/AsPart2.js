function FetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched successfully!");
    }, 2000);
  });
}

function FetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched successfully!");
    }, 3000);
  });
}

async function getBlogData(params) {
    try{
        console.log("Fetching blog data...");
        // const blogData=await FetchPostData();
        // const commentData=await FetchCommentData();

      const[postData, commentData] = await Promise.all([FetchPostData(),FetchCommentData()]);
        console.log("post data fetched:",postData);
        console.log("Comment data fetched:",commentData);
        console.log("Fetch complete");

    }catch(error){
        console.error("Error fetching blog data:",error);
    }
    
}
getBlogData();