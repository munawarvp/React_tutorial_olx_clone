import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { postContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/Heart';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState();
  const [products, setProducts] = useState([])
  const { postDetails, setPostDetails } = useContext(postContext);
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  console.log(postDetails);
  useEffect(() => {
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId)
      .get().then((res) => {
        res.forEach(doc => {
          setUserDetails(doc.data())
        })
      })
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  }, [])
  return (
    
      <div className="viewParentDiv">
        <div className='two-row'>
          <div className="imageShowDiv">
            <img className='post-image'
              src={postDetails.url}
              alt="post_image"
            />
          </div>
          <div className="rightSection">
            <div className="productDetails">
              <p>&#x20B9; {postDetails.price} </p>
              <span>{postDetails.name}</span>
              <p>{postDetails.category}</p>
              <span>{postDetails.createdAt}</span>
            </div>
            {userDetails && <div className="contactDetails">
              <p>Seller details</p>
              <p>{userDetails.username}</p>
              <p>{userDetails.phone}</p>
            </div>}
          </div>
        </div>
        

        <div className="postParentDiv">
          <div className="moreView">
            <div className="heading">
              <span>Quick Menu</span>
              <span>View more</span>
            </div>
            <div className="cards">
              {
                products.map(product => {
                  return <div className="card" onClick={() => {
                    setPostDetails(product)
                    console.log('sss', postDetails)
                    history.push('/view')

                  }}>
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={product.url} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {product.price}</p>
                      <span className="kilometer">{product.category}</span>
                      <p className="name">{product.name}</p>
                    </div>
                    <div className="date">
                      <span>{product.createdAt}</span>
                    </div>
                  </div>

                })
              }
            </div>
          </div>
        </div>
      </div>
    


  );
}
export default View;