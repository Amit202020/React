const Post=(props)=>{
    const {userId,id,title,body}=props.data;
    return(
        <tr>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
}
export default Post;
