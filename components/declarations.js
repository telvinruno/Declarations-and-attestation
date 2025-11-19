import Image from 'next/image'
import Link from 'next/link'
import commitToCodeOfConduct from '../public/Commit to code of conduct.png'
import declareConflict from '../public/Declare conflict.png'
import declareGift from '../public/Declare gift.png'

export default function Declaration() {
  return (
    <div style={styles.superContainer}>
     <div style={styles.mainContainer}>


        <div style={styles.mainSubContainer} >
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>COI declaration</h1>
                <p style={{ fontSize: '17px' }}>Use this form to declare conflice of interest</p>
                 <Link href="/declarations/conflictofinterest">
                <button style={styles.button}>Start commitment</button>
                </Link>

            </div>
            <div>
                   <Image 
                      src={commitToCodeOfConduct}
                      alt="Error" 
                      width={250} 
                      height={300} 
                      style={{ borderRadius: '0px 5px 5px 0px' }} 
                  />
            </div>

        </div>



        <div style={styles.mainSubContainer}>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Gift declaration</h1>
                <p style={{ fontSize: '17px' }}>Use this form to declare a gift</p>
                <Link href="/declarations/gift">
                <button style={styles.button}>Start commitment</button>
                </Link>

            </div>
            <div>
              
            <Image 
              src={declareConflict} 
              alt="Example Image" 
              width={250} 
              height={300}
              style={{ borderRadius: '0px 5px 5px 0px' }} 
           />

            </div>

        </div>



     </div>

    </div>
  );
}

const styles = {
  superContainer: {
                                                                         //paddingTop: '50px',                                  //changes the container holding make declaration - with 3 sub containers
    backgroundColor: '#f5f7f6',
    color: 'black',
    display:'flex',
    height: '70vh',
    width:'60vw',
    
                                                         //padding left : 357 was removed
    

  },
  navList: {
    listStyle: 'none',
    display: 'flex-start',
    color:'black'
  },

  mainContainer: {
    display:'flex-start',
    justifyContent:'space-between',
    width:'100%',


  },

  mainSubContainer: {
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    marginBottom: '20px',
    borderRadius:'5px'
  },

  button:{
    width:'135px',
    height:'35px',
    backgroundColor:'#35A839',
    borderRadius: '5px 5px 5px 5px',
    fontSize:'13px',
    textAlign:'center',
    paddingTop:'5.8px',
    marginTop:'20px',
    color:'white'
    
  },

  contentHolder:{
   display:'flex-start',
   paddingLeft:'25px',
   paddingTop: '15px',
    
  }
};