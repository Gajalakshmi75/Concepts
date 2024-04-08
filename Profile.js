const Profile=({title,thumbnailUrl,url})=>{
    // const {title,thumbnailUrl,url}=props;
    return <article className="profile-card">
        <img src={thumbnailUrl}></img>
        <h2 className="title">{title}</h2>
        <a href={url} className="button">Details</a>
    </article>
 };
 export  default Profile;