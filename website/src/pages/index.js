import Intro from "../components/intro";
import Notice from "../components/notice";
import Prologue from "../components/prologue";


export default function Home() {

    return (
        <main className={"min-h-screen bg-slate-900 w-full"}>
            <Intro to={'notice'}/>
            <Notice to={'prologue'}/>
            <Prologue/>
        </main>
    )
}
