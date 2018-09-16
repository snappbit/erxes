import * as React from 'react';
import { IBrand } from '../../brands/types';
import { RowActions } from '../../common/components';
import { ICommonRowActionProps } from '../../common/types';
import { Form } from '../containers';
import { IResponseTemplate } from '../types';

class Row extends React.Component<{ object: IResponseTemplate } & ICommonRowActionProps> {
  render() {
    const { object } = this.props;
    const brand = object.brand || {} as IBrand;

    return (
      <tr>
        <td>{brand.name}</td>
        <td>{object.name}</td>
        <RowActions
          {...this.props}
          renderForm={(props) =>
            <Form {...props} />
          }
        />
      </tr>
    );
  }
}

export default Row;