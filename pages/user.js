export async function getStaticProps() {
  const res = await fetch("http://localhost:3500/users/login/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const user = ({ data }) => {
  return (
    <div className="container ">
      <div>list user</div>
      {data.map((item) => (
        <h5 key={item.id}>{item.name}</h5>
      ))}
    </div>
  );
};

export default user;
