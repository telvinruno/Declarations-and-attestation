import Image from 'next/image'
import commitToCodeOfConduct from '../public/Commit to code of conduct.png'
import insiderTrader from '../public/insider trader.png'
import confirmtraining from '../public/Confirm-training.png'
import Link from "next/link"

import { Button } from "@/components/ui/button"

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
    <div style={styles.superContainer} className='mx-12 bg-gray-200'>
     <div style={styles.mainContainer}>
       <h1 className="font-bold text-xl my-3">Available Attestations</h1>

        <div style={styles.mainSubContainer} className='border' >
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Commit to code of conduct</h1>
                <p style={{ fontSize: '17px' }}>Confirm your commitment to the company's code of conduct by completing this declaration</p>
                <Link href="/commitments/codeofconduct">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start commitment</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
                   <Image 
                      src={commitToCodeOfConduct}
                      alt="Error"  
                      style={{ borderRadius: '0px 5px 5px 0px', width:'100%' }} 
                  />
            </div>

        </div>



        <div style={styles.mainSubContainer} className='border'>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Commit to insider trader policy</h1>
                <p style={{ fontSize: '17px' }}>Use this form to commit to the company's insider trading policy</p>
                <Link href="/commitments/insidertrader">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start commitment</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
              
            <Image 
              src={insiderTrader} 
              alt="Example Image" 
              style={{ borderRadius: '0px 5px 5px 0px', width:'100%' }} 
           />

            </div>

        </div>



        <div style={styles.mainSubContainer} className='border'>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Confirm training</h1>
                <p style={{ fontSize: '17px' }} >Use this form to confirm training received</p>
                <Link href="/commitments/confirmtraining">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start confirmation</Button>
                </Link>

            </div>
            <div style={styles.imageHolder} >

                  <Image 
                      src={confirmtraining} 
                      alt="Example Image"  
                      style={{ borderRadius: '0px 5px 5px 0px', width:'100%' }} 
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
    backgroundColor:'#ffffff',
    marginBottom: '3vh',
    borderRadius:'5px',
    width:'100%',
   
    
  },


  contentHolder:{
   display:'flex-start',
   paddingLeft:'1.5vw',
   paddingTop: '2vh',
   width:'100%'
    
  },


  imageHolder:{
   width:'25%',
   height:'100%'
    
  }
};