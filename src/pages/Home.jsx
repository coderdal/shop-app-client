import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import RecentPosts from "@/components/Home/RecentPosts";

const Home = () => {
  return (
    <section className="px-6 mt-6">
      <Banner />
      <Categories />
      <RecentPosts />
    </section>
  );
};

export default Home;
