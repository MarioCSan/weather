import { useEffect, useState } from "react";
import logo from './vercel.svg'

export default function Maintenance() {

const [expiryTime, setExpiryTime] = useState("30 jul 2023 23:00:00");
const [countdownTime, setCountdownTime] = useState({
  countdownDays: "",
  countdownHours: "",
  countdownMinutes: "",
  countdownSeconds: "",
});

const countdownTimer = () => {
  const timeInterval = setInterval(() => {
    const countdownDateTime = new Date(expiryTime).getTime();
    const currentTime = new Date().getTime();
    const remainingDayTime = countdownDateTime - currentTime;
    const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(
      (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const totalMinutes = Math.floor(
      (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const totalSeconds = Math.floor(
      (remainingDayTime % (1000 * 60)) / 1000
    );

    const runningCountdownTime = {
      countdownDays: totalDays,
      countdownHours: totalHours,
      countdownMinutes: totalMinutes,
      countdownSeconds: totalSeconds,
    };

    setCountdownTime(runningCountdownTime);

    if (remainingDayTime < 0) {
      clearInterval(timeInterval);
      setExpiryTime(false);
    }
  }, 1000);
};

useEffect(() => {
  countdownTimer();
});
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <h1 className={`mb-3 text-2xl font-semibold`}>
        La aplicación volverá a estar disponible en <br />
        {countdownTime.countdownDays} días: {countdownTime.countdownHours} Horas
        : {countdownTime.countdownMinutes} Minutos:{" "}
        {countdownTime.countdownSeconds} Segundos
      </h1>

      <h2 className={`mb-3 text-2xl font-semibold`}>
        Se están realizando cambios en la interfaz para mejorar la experiencia{" "}
        <br />
        del usuario y cambios en la API para cambiar el origen de los datos.
      </h2>
      <img
        src={logo}
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <div
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Puedes explorar el resto de mis apps en{" "}
          <a href="https://mariocanales.es" target="">
            mi web
          </a>
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </div>
    </main>
  );
}
