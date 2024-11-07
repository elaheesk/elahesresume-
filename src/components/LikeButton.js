import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
const LikeButton = () => {
    const [likes, setLikes] = useState(0);


    useEffect(() => {
        const likesRef = doc(db, "likes", "totalLikes");
        const unsubscribe = onSnapshot(likesRef, (doc) => {
            if (doc.exists()) {
                setLikes(doc.data().count);
            }
        });

        return () => unsubscribe();
    }, []);


    const handleLike = async () => {
        const likesRef = doc(db, "likes", "totalLikes");
        await updateDoc(likesRef, {
            count: likes + 1,
        });
    };
    return (<div>
        <button onClick={handleLike}>Like</button>
        <p>{likes} people liked this!</p>
    </div>)
}
export default LikeButton;