export const DetailComponent = (props) => {
  const { title, image, contents } = props.data;

  return (
    <div>
      <h1 style={{ paddingTop: "120px" }}>{title}</h1>
      <div className="img_fieldset">
        <img src={image} width="300" height="300" />
        <fieldset>
          <legend>개요</legend>
          <ul>
            {contents.map((content) => {
              return <li className="li">{content}</li>;
            })}
          </ul>
        </fieldset>
      </div>
    </div>
  );
};
