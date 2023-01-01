import Link from 'next/link';
import { relativeToAbsoluteUrls } from '../../utils/relativeToAbsoluteUrls';

export const Cta = ({heading, blurb, link}) => {
    return (
        <>
        <div className="tp-photograper-cta pt-125 pb-135 grey-bg">
            <div className="container">
            <div className="row">
                <div className="col-xl-12">
                <div className="tp-photograper-cta-wrapper text-center">
                    <h3
                        className={`tp-photograper-cta-title mb-20`}
                        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(heading) }}
                    />
                    <p
                        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(blurb) }}
                    />
                    <div className="tp-cta-btn mt-25">
                    <Link href={link.url}>
                        <a className="tp-solid-btn-square">{link.title}</a>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

