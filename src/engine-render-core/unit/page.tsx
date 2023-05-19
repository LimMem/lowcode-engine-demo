import React from "react";

interface PageProps {
  schema: Record<string, any>;
  ref: (ref: any, id: string) => void;
  component: React.ComponentClass<any>;
}

class BasePage extends React.Component<PageProps> {
  components: Record<string, any>[];
  constructor(props: PageProps) {
    super(props);
    this.components = props.schema.components || [];
  }
  render(): React.ReactNode {
    return this.components.map(schema => {
      return React.createElement(this.props.component, {
        ref: (r: any) => {
          this.props.ref(r, schema.id);
        },
        schema,
      })
    });
  }
}

export default BasePage;
