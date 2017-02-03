import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Report from './Report'
import LineItem from './LineItem'
import data from '../data'

describe('Report', () => {
  let [reports, params, report, expected] = [];

  beforeEach(() => {
    reports = data.reports
    params = {reportId: 'foo'}
    expected = reports.foo

    report = shallow(
      <Report reports={reports} params={params} />
    )
  })

  describe('displays', () => {
    test('title', () => {
      expect(report.find('h2').text())
        .to.include(expected.title)
    })

    test('status', () => {
      expect(report.find('h2 span.label').text())
        .to.equal(expected.status)
    })

    test('comment', () => {
      expect(report.find('p').text())
        .to.include(expected.comment)
    })

    test('line items', () => {
      expect(report.find(LineItem))
        .to.have.length(expected.lineItems.length)
    })
  })
})
