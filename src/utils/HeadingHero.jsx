import React, {  useEffect,useState } from 'react'

export const HeadingHero = () => {
  const roles = React.useMemo(() => [
    {title:"Software Developer"},
    {title:"UI/UX Developer"},
    {title:"Full stack Developer"},
    {title:"web Developer"}, 
  ], []);


  const [currentRoleIndex, setCurRoleIndex] = useState(0);
  const [currText,setOnCurText] = useState('');
    const [isDeleting,setIsDeleting] = useState(false);
    const [typingSpeed,setTypingSpeed] = useState(150);


useEffect(() => {
    const handleTyping = () => {
        const currentRole = roles[currentRoleIndex].title;
        if(!isDeleting){
           if (currText===currentRole){
            setTimeout(() => setIsDeleting(true),2000);
            setTypingSpeed(500);
              } else{
                setOnCurText(currentRole.substring(0,currText.length+1));
                setTypingSpeed(150);
              }
        } else{
            if (currText===''){
                setIsDeleting(false);
                setCurRoleIndex((prev) => (prev + 1) % roles.length);
                setTypingSpeed(500);
            } else{
                setOnCurText(currText.substring(0,currText.length-1));
                setTypingSpeed(50);
            }
        }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
},[currText,isDeleting,currentRoleIndex,roles,typingSpeed]);



return (
   <div className='text-center md:text-start'>
    <h1 className='text-3xl md:text-5xl font-bold text-white mb-6'>
        <span className='text-outline pb-1'>{currText}</span>
        <span className='inline-block h-7 md:h-14 w-0.5 bg-cyan-400 ml-1'></span>
     </h1>
   </div>
)
};


