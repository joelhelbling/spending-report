
const data = {
  reports: {
    foo: {
      title: 'Four Winds Eclectic',
      created_at: Date.now(),
      updated_at: Date.now(),
      status: 'open',
      comment: 'A report',
      lineItems: [
        {
          description: 'A flanged thinger',
          unitCost: 100000,
          quantity: 4,
        },
        {
          description: 'Knarled kinks',
          unitCost: 50000,
          quantity: 1,
        }
      ]
    },
    bar: {
      title: 'Wonderful putty --try it!',
      created_at: Date.now(),
      updated_at: Date.now(),
      status: 'closed',
      comment: 'A bicycle and a truck went on a date.',
      lineItems: []
    }
  }
}

export default data
