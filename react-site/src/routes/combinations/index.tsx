import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/combinations/')({
  component: CombinationListComponent,
})

function CombinationListComponent() {
    return <>
        <p>Temporary listing of some technique combinations</p>

        <section>
            <em>Sourced from "Vital Judo" by T. Sato and I. Okano</em>

            <ul>
                <li>uchimata to kouchi gari</li>
                <li>kouchi gari to ouchi gari</li>
                <li>ouchi gari to osoto otoshi/gari</li>

                <li>React to tai otoshi with stepover and kosoto gari</li>
                <li>React to osoto gari with osoto gari</li>
                <li>React to (left-side) osoto gari with kosoto gari</li>

                <li>Osoto gari to uchimata</li>
                <li>Ouchi gari to uchimata</li>
                <li>Kouchi gari to uchimata</li>

                <li>Osoto gari to ippon seoi nage</li>
                <li>Ouchi gari to ippon seoi nage</li>
                <li>Hiza guruma to ippon seoi nage</li>

                <li>Kosoto gari to ippon seoi nage</li>
                <li>Ouchi gari to tai otoshi</li>
                <li>Osoto gari to harai goshi</li>

                <li>Kouchi gari to tomoe nage</li>
            </ul>

        </section>
        <section>
            <em>Traditional Joint technique progressions</em>
            <ul>
                <li>Waki gatame to nikyu to sankyu</li>
                <li>Yubi nage to uki otoshi</li>
                <li>Ude garame to osoto gari</li>
                <li>Kote gaeshi to tai otoshi</li>
                <li>Kuchiki Taoshi to ankle lock</li>
                <li>Waki gatame to chicken wing</li>
            </ul>
        </section>
    </>
}