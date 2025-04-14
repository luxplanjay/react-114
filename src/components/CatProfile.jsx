export default function CatProfile({ info: { name, phone, email, image } }) {
  return (
    <>
      <img src={image} alt={name} height="200" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </>
  );
}
