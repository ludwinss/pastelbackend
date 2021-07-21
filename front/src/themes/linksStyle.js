const linksStyles={
  list:{
    textDecoration:'none',
  },
  listItem:{
    padding:0,
    display:'flex',
    marginTop:'3px',
    '& a':{
      textDecoration:'none',
      color:'white',
      width:'100%',
      padding:'5px 3px'
    }
  },
  link:{
    width:'100%',
    color:'white',
    textTransform:'none',
    '&:hover':{
      borderLeft:'5px solid white',
      borderRadius:0
    }
  }
}

export default linksStyles;
