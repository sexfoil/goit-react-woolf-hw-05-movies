import ActorItem from 'components/ActorItem/ActorItem';

const ActorList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => {
        console.log(actor);
        return <ActorItem key={actor.id} {...actor} />;
      })}
    </ul>
  );
};

export default ActorList;
