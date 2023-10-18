import React from "react";
import Spinner from "../components/spinner/spinner";
import Styles from "./login.styles.scss";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EAC0QAAICAgADBgUFAQAAAAAAAAECAAMEERIhMQUTQWFxsRQiMlHRQoGRocHw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARFB/9oADAMBAAIRAxEAPwDrAQwJAIYE8l1oBDVZFWMVYRFWMVZR0qlj0EYByhEAhSSoRgURirIqw/pUn7Q0tVme29luATmFOmG/T8zVWRwAsR7TFTdi2516M6sVPIMd8/Ej2/aWI0CwX5XdgHu69MW8CfCagy71sbnl+2O2RSrYuC+jxHiYfp8h5+0DsLGsyR3rXWbHPmxO+oH++kuD1comUAFUKOgGoJMygFWMC7HOWohAQpYrVHU6PPz3OBl5KWds2V/Drw1bPegEMW19P2Oz953chhU9dtlq11LxBuLkOY5Hf/dYjG+GXItVDX3lzF3HUt05+nIywc/Nrw68GrMzKqrGdAdFdlmI3oH8ydkZ2A95COabWAAqb5VHoOm4/tnBXJwCqL89ZJqA5DYG9f0ZVjjKXFetENJsWxm1sgdQP59peDpkwCZGaLZpkawJckhhAXVV3Vmu1A6nwI3EfB0LlLkonDYqFPl5AjzmgmAWhQd2gbiC89k9fExGPQmJUaqthOIkAn6dneh5RzNFs0CM0WzSmaLLQ0//2Q=="
          alt="logo são jorge"
        />
        <h1>4Dev - Enquetes para programadores</h1>
      </header>
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu email" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Login;
