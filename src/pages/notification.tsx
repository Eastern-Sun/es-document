import type { NextPage } from 'next'
import Layout from '../components/layout'
import LeftMenu from '../components/leftMenu'

const Home: NextPage = () => {
  return (
    <Layout pageTile={'Hướng dẫn sử dụng service notification'}>
      <div className="container-fluid">
        <div className="row">
          <LeftMenu></LeftMenu>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Hướng dẫn sử dụng service notification</h1>
            </div>
            <h4>Nội dung bài viết về sử dụng service notification</h4>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Home
