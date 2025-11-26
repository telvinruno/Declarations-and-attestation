import Image from 'next/image'
import Link from 'next/link'
import declareConflict from '../public/Declare conflict.png'
import declareGift from '../public/Declare gift.png'
import { Button } from "@/components/ui/button"

export default function Declaration() {
  return (
    <div style={styles.superContainer} className='mx-15'>
     <div style={styles.mainContainer}>
     <h1 className="font-bold text-xl my-5">Available Declarations</h1>

        <div style={styles.mainSubContainer} className='border'>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>COI declaration</h1>
                <p style={{ fontSize: '17px' }}>Use this form to declare conflict of interest</p>
                 <Link href="/declarations/conflictofinterest">
                {/* <Button className="flex items-center w-1/5 my-3 text-sm">Start commitment</Button> */}
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start commitment</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
                   <Image 
                      src={declareConflict}
                      alt="Error" 
                      width={250} 
                      height={300} 
                      style={{ borderRadius: '0px 5px 5px 0px', width:'100%' }} 
                  />
            </div>

        </div>



        <div style={styles.mainSubContainer} className='border'>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Gift declaration</h1>
                <p style={{ fontSize: '17px' }}>Use this form to declare a gift</p>
                <Link href="/declarations/gift">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start commitment</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
              
            <Image 
              src={declareGift} 
              alt="Example Image" 
              style={{ borderRadius: '0px 5px 5px 0px' , width:'100%'}} 
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
    width:'100%'
    
  },


  contentHolder:{
   display:'flex-start',
   paddingLeft:'1.5vw',
   paddingTop: '2vh',
   width:'100%'
    
  },


  imageHolder:{
   width:'25%'
    
  }
};