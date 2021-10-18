import "./styles.css"

 function Left() {
  
  return (
    <div style={{display: 'flex',fontFamily: 'Raleway-sanserif', flexDirection: 'row',justifyContent:'flex-start',cursor: 'pointer' }}>
         
          <div ><span  style={{Width: '130px',  fontSize: '32px', fontWeight: '800',color: '#0084ff',}}>EDYODA</span>
           <p style={{ marginTop: '0', fontSize: '18px',fontWeight: '800px',fontStyle: 'Italic'}}>Stories </p></div>
        
        <div style={{fontStyle: 'normal', paddingTop: '22px', paddingLeft: '60px'}}> Explore Categories     
        <img src="https://tse2.mm.bing.net/th?id=OIP.Z0F-7epmRy2po249fAKhGQAAAA&pid=Api&P=0&w=300&h=300" alt="arrow" width="15" height="12"/>
            </div>
     
    </div>
  );
}
export default Left;