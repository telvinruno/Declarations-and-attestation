import Image from 'next/image'
import commitToCodeOfConduct from '../public/Commit to code of conduct.png'
import insiderTrader from '../public/insider trader.png'
import declareGift from '../public/Declare gift.png'
import Link from "next/link"
import CommitToCodeOfConduct from './commit-to-code-of-conduct-form'

export function ClickableCardLink() {
  return (
    <Link href="/target-page" className="block">
      <div className="cursor-pointer p-6 border rounded-lg shadow hover:bg-gray-100 transition">
        <h2 className="text-lg font-bold">Go to Target Page</h2>
        <p>Click anywhere on this card to navigate.</p>
      </div>
    </Link>
  )
}
 
export default function Declaration() {
  return (
    <div style={styles.superContainer}>
     <div style={styles.mainContainer}>


        <div style={styles.mainSubContainer} >
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Commit to code of conduct</h1>
                <p style={{ fontSize: '17px' }}>Confirm your commitment to the company's code of conduct by completing this declaration</p>
                <Link href="/commitments/codeofconduct">
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
                <h1 style={{fontWeight: 'bold'}}>Commit to insider trade policy</h1>
                <p style={{ fontSize: '17px' }}>Use this form to commit to the company's insider trading policy</p>
                <Link href="/commitments/insidertrader">
                <button style={styles.button}>Start commitment</button>
                </Link>

            </div>
            <div>
              
            <Image 
              src={insiderTrader} 
              alt="Example Image" 
              width={250} 
              height={300}
              style={{ borderRadius: '0px 5px 5px 0px' }} 
           />

            </div>

        </div>



        <div style={styles.mainSubContainer}>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Confirm training</h1>
                <p style={{ fontSize: '17px' }} >Use this form to confirm training received</p>
                <Link href="/commitments/confirmtraining">
                <button style={styles.button}>Start Confirmation</button>
                </Link>

            </div>
            <div>

                  <Image 
                      src={declareGift} 
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