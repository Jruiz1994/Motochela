import { Card, Image } from 'semantic-ui-react';

function Items({name, imagen, date, description}) {
  return (
<Card>
      <Image src={imagen} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{date}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  )}

  export default Items;