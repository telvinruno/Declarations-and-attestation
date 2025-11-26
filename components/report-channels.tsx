import Image from 'next/image'
import Link from 'next/link'
import generalreport from '../public/Make a report.png'
import anonymousreport from '../public/Anoymous report.png'
import { Button } from "@/components/ui/button"

export default function ReportChannels() {
  return (
    <div style={styles.superContainer} className='mx-15'>
     <div style={styles.mainContainer}>
     <h1 className="font-bold text-xl my-5">Reporting channels</h1>

        <div style={styles.mainSubContainer} className='border' >
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Make an email report</h1>
                <p style={{ fontSize: '17px' }}>Send an email to the ethics department </p>
                 <Link href="/reportissue/makeareport">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
                   <Image 
                      src={generalreport}
                      alt="Error" 
                      style={{ borderRadius: '0px 5px 5px 0px', width:'100%' }} 
                  />
            </div>

        </div>



        <div style={styles.mainSubContainer} className='border'>
            <div style={styles.contentHolder}>
                <h1 style={{fontWeight: 'bold'}}>Make an anonymous report</h1>
                <p style={{ fontSize: '17px' }}>Whistle blow via anonymous channels</p>
                <Link href="https://www.safaricomethicsline.com/DisclosingIrregularitiesPage.aspx">
                 <Button className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3">Start</Button>
                </Link>

            </div>
            <div style={styles.imageHolder}>
              
            <Image 
              src={anonymousreport} 
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
    width:'100%',
    

    
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