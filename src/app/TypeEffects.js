import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  const strings = ['Data Science Student', 'Jr. Web Developer', 'Jr. Back-end Developer'];

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(strings[0]).pauseFor(4000).deleteAll().pauseFor(2000).typeString(strings[1]).pauseFor(4000).deleteAll().pauseFor(2000).typeString(strings[2]).pauseFor(4000).deleteAll().pauseFor(2000).start();
      }}
    />
  );
};

export default TypeEffect;
