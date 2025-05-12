import css from "./UserInfo.module.css";

export default function UserInfo({ user }) {
  return (
    <div className={css.container}>
      <img src={user.image} alt={user.firstName} className={css.avatar} />
      <div className={css.info}>
        <h2 className={css.name}>
          {user.firstName} {user.lastName}
        </h2>
        <p className={css.detail}>
          <strong>Age:</strong> {user.age}
        </p>
        <p className={css.detail}>
          <strong>Email:</strong> {user.email}
        </p>
        <p className={css.detail}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className={css.detail}>
          <strong>Address:</strong> {user.address.city}, {user.address.state}
        </p>
        <h3 className={css.sectionTitle}>Company</h3>
        <p className={css.detail}>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p className={css.detail}>
          <strong>Department:</strong> {user.company.department}
        </p>
        <p className={css.detail}>
          <strong>Title:</strong> {user.company.title}
        </p>
      </div>
    </div>
  );
}
