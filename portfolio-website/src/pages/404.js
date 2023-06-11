import * as React from "react"


import "../styles/four04.css"


const NotFoundPage = () => {
  return (
    <section className="notfound">
      <div className='notfound_table'>
        <table>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest top3">401</h1>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest top2">402</h1>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest top1">403</h1>
            </th>
          </tr>
          <tr>
            <th>
              <h1 class="txt center">Page not Found &nbsp;</h1>
            </th>
            <th>
              <h1 class="txt center">404</h1>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest bottom1">405</h1>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest bottom2">406</h1>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <h1 class="txt rest bottom3">407</h1>
            </th>
          </tr>
        </table>
        <a href="/" className='btn About_Page'>Go Back</a>
      </div>

      <h1 className="sidetext">404</h1>
    </section>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
