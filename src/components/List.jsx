import React, { Fragment } from 'react';


/**
 * List component
 *
 * @param {any[]} props.items
 * @param {(any, number) => string} props.keyExtractor
 * @param {(any, number) => JSX.Element} props.render
 * @param {string} containerClassName
 * @return {JSX.Element}
 */
function List ({ items, keyExtractor, render, containerClassName }) {
  return (
    <div className={containerClassName}>
      {items.map((item, index) => (
        <Fragment key={keyExtractor(item, index)}>
          {render(item, index)}
        </Fragment>
      ))}
    </div>
  );
}

export default List;
