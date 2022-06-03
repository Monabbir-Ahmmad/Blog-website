const imageArray = [
  "https://www.elegantthemes.com/blog/wp-content/uploads/2019/08/things-successful-blogs-have-in-common-featured-image.jpg",
  "https://oppzone.co/wp-content/uploads/2022/02/image-4.jpeg",
  "https://img.freepik.com/free-vector/business-people-around-huge-tablet-with-blog-page_93633-716.jpg?w=2000",
  "https://blog.tubikstudio.com/wp-content/uploads/2016/04/ux-design-scannable-interface-tubik-blog.png",
  "https://www.imaginarycloud.com/blog/content/images/2018/07/5--tutorial_illustration-1.jpg",
  "https://sohbasoft.com/wp-content/uploads/2022/01/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg",
  "https://www.blogtyrant.com/wp-content/uploads/2015/02/blogging-strategy.png",
  "https://cdn.dribbble.com/users/1170793/screenshots/6018665/ecommerce-illustration_4x.png",
  "https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg",
  "https://digitalwebpanama.com/blog/wp-content/uploads/2020/06/blog.png",
  "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2021/03/O-Que-E-Um-Blog-Uma-Introducao-ao-Blogging.png",
];

export const randomColor = () => {
  let hex = Math.ceil(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
};

export const randomImageById = (id) => {
  return imageArray[id % 10];
};
