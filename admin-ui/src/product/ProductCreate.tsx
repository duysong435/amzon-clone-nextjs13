import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="colors" source="colors" />
        <div />
        <NumberInput label="discountedPrice" source="discountedPrice" />
        <div />
        <ReferenceInput source="order.id" reference="Order" label="orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <NumberInput label="titlePrice" source="titlePrice" />
        <div />
      </SimpleForm>
    </Create>
  );
};
