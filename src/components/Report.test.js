import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Report from './Report'
import LineItem from './LineItem'
import reports from '../data/reports'
import lineItems from '../data/lineItems'

describe('Report', () => {
  let [expectedReport, expectedLineItems, params, report, expected] = [];

  beforeEach(() => {
    params = { reportId: 'foo' }
    console.log(reports)
    expectedReport = reports.filter((report) => report.id === 'foo')[0]
    expectedLineItems = lineItems.foo

    report = mount(
      <Report reports={reports} lineItems={lineItems} params={params} />
    )
  })

  describe('displays', () => {
    test('title', () => {
      expect(report.find('h2').text())
        .to.include(expectedReport.title)
    })

    test('status', () => {
      expect(report.find('h2 span.label').text())
        .to.equal(expectedReport.status)
    })

    test('comment', () => {
      expect(report.find('p').text())
        .to.include(expectedReport.comment)
    })

    test('line items', () => {
      expect(report.find(LineItem))
        .to.have.length(expectedLineItems.length)
    })

    test('total', () => {
      expect(report.find('.report-total').text())
        .to.equal("Le 450,000")
    })
  })
})
