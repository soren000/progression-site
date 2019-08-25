import Layout from '../components/Layout';

const contact = props => (
    <>
        <Layout />
        <div>
            <p>If you would like to contact me for any reason, please fill out the info below and I'll get back to you soon!</p>
            <div>
                <form>
                    <p>E-Mail (some place I can respond back to you)</p>
                    <input type="text" />
                    <p>Message</p>
                    <textarea></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </>
);

export default contact;