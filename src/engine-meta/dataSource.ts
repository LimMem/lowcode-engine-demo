class DataSource {
  private proxyData: any;
  private dataSource: any = {
    test: {
      name: '修改前'
    }
  };
  constructor(props: any) {
    this.proxyData = new Proxy(this.dataSource, {
      set(target, p, newValue, receiver) {
        props.onChange(target, p, newValue);
        return true;
      },
    })

  }
  get data() {
    return this.proxyData;
  }
  updateComponent = () => {
    this.proxyData.test = {
      name: `修改后${Math.random()}`
    };
  }
}

export default DataSource;
