import book from "../../assets/images/book.jpeg";
import img from "../../assets/images/img.jpeg";
import mountain from "../../assets/images/mountain.jpeg";
import person from "../../assets/images/person_2.jpg";
import Comment from "../commentSection/Comment";

const Post = () => {
  return (
    <div className="container mx-auto max-w-[71.375rem] h-full">
      <div className="row flex justify-between items-start space-x-4">
        {/* left side */}
        <div className="item-1 w-[48.125rem] h-full">
          <div className="blogs-content text-base text-[#808080] w-full h-full space-y-4 my-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium nam quas inventore, ut iure iste modi eos adipisci ad
              ea itaque labore earum autem nobis et numquam, minima eius. Nam
              eius, non unde ut aut sunt eveniet rerum repellendus porro.
            </p>
            <p>
              Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas
              sit vel. Voluptatum provident id quis quo. Eveniet maiores
              perferendis officia veniam est laborum, expedita fuga doloribus
              natus repellendus dolorem ab similique sint eius cupiditate
              necessitatibus, magni nesciunt ex eos.
            </p>
            <p>
              Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at
              earum assumenda similique ut? Aperiam vel aut, ex exercitationem
              eos consequuntur eaque culpa totam, deserunt, aspernatur quae
              eveniet hic provident ullam tempora error repudiandae sapiente
              illum rerum itaque voluptatem. Commodi, sequi.
            </p>
          </div>
          <div className="blog-images w-full h-full">
            <div className="card-1 w-full h-[33rem]">
              <a href="#">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={book}
                  alt=""
                />
              </a>
            </div>
            <div className="card-2 w-full h-[15.875rem] flex gap-6 mt-3.5">
              <a href="#">
                <img
                  className="w-[23.125rem] h-full rounded-lg object-cover"
                  src={img}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-[23.125rem] h-full rounded-lg object-cover"
                  src={mountain}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="blogs-content text-base text-[#808080] w-full h-full space-y-4 my-12">
            <p>
              Quibusdam autem, quas molestias recusandae aperiam molestiae modi
              qui ipsam vel. Placeat tenetur veritatis tempore quos impedit
              dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate
              quisquam reiciendis, minus, animi minima eum officia doloremque
              repellat eos, odio doloribus cum.
            </p>
            <p>
              Temporibus quo dolore veritatis doloribus delectus dolores
              perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat,
              magnam cupiditate. Aut, laboriosam magnam, nobis dolore fugiat
              impedit necessitatibus nisi cupiditate, quas repellat itaque
              molestias sit libero voluptas eveniet omnis illo ullam dolorem
              minima.
            </p>
            <p>
              Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem,
              vero expedita illo similique saepe nisi deleniti. Cumque,
              laboriosam, porro! Facilis voluptatem sequi nulla quidem,
              provident eius quos pariatur maxime sapiente illo nostrum
              quibusdam aliquid fugiat! Earum quod fuga id officia.
            </p>
            <p>
              Illo magnam at dolore ad enim fugiat ut maxime facilis autem,
              nulla cumque quis commodi eos nisi unde soluta, ipsa eius
              aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga
              accusamus dolor dolorem perspiciatis rerum hic, consectetur error
              rem aspernatur!
            </p>
          </div>

          {/* Comment Section */}

          <Comment/>
        </div>

        {/* right side */}
        <div className="item-2 w-[25rem] h-full my-12 pl-20 pr-4">
          {/* author widget */}
          <div className="author-details flex flex-col justify-center items-center">
            <img
              src={person}
              alt="Author"
              className="w-2/5 rounded-full mb-10"
            />
            <h3 className="text-2xl mb-2">Craig David</h3>
            <p className="text-base text-[#808080] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facilis sunt repellendus excepturi beatae porro
              debitis voluptate nulla quo veniam fuga sit molestias minus.
            </p>
            <a
              href="#"
              className="mt-8 py-2 px-6 bg-blue-600 rounded  text-base text-white hover:bg-blue-700"
            >
              Read my bio
            </a>
          </div>
          {/* Popular Posts */}
          <div className="popular_post flex flex-col mt-12">
            <h2 className="text-xl mb-5">Popular Posts</h2>
            <hr />
            <div className="posts mt-7">
              <a href="#">
                <div className="post w-full flex justify-between space-x-6">
                  <img src={img} alt="" className="w-[30%] h-full rounded" />
                  <div className="post_content">
                    <h3 className="text-lg mb-2">
                      There's a Cool New Way for Men to Wear Socks and Sandals
                    </h3>
                    <p className="date text-sm text-[#808080]">
                      March 12, 2022
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="posts mt-7">
              <a href="#">
                <div className="post w-full flex justify-between space-x-6">
                  <img src={img} alt="" className="w-[30%] h-full rounded" />
                  <div className="post_content">
                    <h3 className="text-lg mb-2">
                      There's a Cool New Way for Men to Wear Socks and Sandals
                    </h3>
                    <p className="date text-sm text-[#808080]">
                      March 12, 2022
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="posts mt-7">
              <a href="#">
                <div className="post w-full flex justify-between space-x-6">
                  <img src={img} alt="" className="w-[30%] h-full rounded" />
                  <div className="post_content">
                    <h3 className="text-lg mb-2">
                      There's a Cool New Way for Men to Wear Socks and Sandals
                    </h3>
                    <p className="date text-sm text-[#808080]">
                      March 12, 2022
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="posts mt-7">
              <a href="#">
                <div className="post w-full flex justify-between space-x-6">
                  <img src={img} alt="" className="w-[30%] h-full rounded" />
                  <div className="post_content">
                    <h3 className="text-lg mb-2">
                      There's a Cool New Way for Men to Wear Socks and Sandals
                    </h3>
                    <p className="date text-sm text-[#808080]">
                      March 12, 2022
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
