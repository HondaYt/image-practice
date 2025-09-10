import Link from "next/link";

export default function Page() {
    return (
        <ul>
            <li><Link href={'/studyMeeting/img-tag'}>imgタグ</Link></li>
            <li><Link href={'/studyMeeting/wh'}>widthとheight</Link></li>
        </ul>
    )
}