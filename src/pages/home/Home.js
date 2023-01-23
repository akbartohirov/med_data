import { useState } from "react";
import "./Home.css";
import {
  Home as HomeIcon,
  User,
  FilePlus,
  BookOpen,
  Mail,
  Share2,
  Settings,
  Calendar,
  PlusCircle,
} from "feather-icons-react";
import {
  Nav,
  NavDropdown,
  Row,
  InputGroup,
  Form,
  Button,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "../../components/datepicker/DatePicker";
import AddPatient from "../../components/modals/addpatient/AddPatient";

const Home = () => {
  const [showPatientModal, setShowPatientModal] = useState(false);

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
          href="#"
        >
          Company name
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <AddPatient value={showPatientModal} func={setShowPatientModal} />

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <img
                    src="https://github.com/mdo.png"
                    alt=""
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                  ></img>
                }
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item size">
                  <Link className="nav-link" aria-current="page" href="#">
                    <HomeIcon className="align-text-bottom me-2" />
                    Главная страница
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link active" href="#">
                    <User className="align-text-bottom me-2" />
                    Пациенты
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link" href="#">
                    <FilePlus className="align-text-bottom me-2" />
                    Журнал регистрации прививок
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link" href="#">
                    <BookOpen className="align-text-bottom me-2" />
                    Отчёт формы №6
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link" href="#">
                    <Mail className="align-text-bottom me-2" />
                    Рассылка
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link" href="#">
                    <Share2 className="align-text-bottom me-2" />
                    Запас вакцин
                  </Link>
                </li>
                <li className="nav-item size">
                  <Link className="nav-link" href="#">
                    <Settings className="align-text-bottom me-2" />
                    Настройки
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h5">Пацыенты</h1>
            </div>

            <Row>
              <Col md={3} className="d-flex align-items-center">
                <InputGroup>
                  <Form.Control
                    placeholder="Поиск пацыента по ФИО и ID"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-success" id="button-addon2">
                    Button
                  </Button>
                </InputGroup>
              </Col>

              <Col className="d-flex align-items-center">
                <Button
                  onClick={() => setShowPatientModal(true)}
                  variant="success"
                >
                  <PlusCircle /> Добавить пацыент
                </Button>{" "}
              </Col>

              <Col md={4} className="d-flex align-items-center">
                <span
                  style={{ width: "40%" }}
                  className="d-flex align-items-center justify-content-evenly"
                >
                  <Calendar />
                  Период с...До{" "}
                </span>
                <DatePicker />
              </Col>
            </Row>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td> </td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
