/**
 * The About section's supporting visual: a structured workspace mockup built
 * entirely in CSS, standing in for the laptop/workspace photo the brief asks
 * for. No person is in frame and there is no generic stock image — the desk is
 * a laptop with an editor showing syntax-coloured code, a notebook and a mug.
 */
export default function AboutVisual() {
  return (
    <div className="about__media" aria-hidden="true">
      <div className="about__frame">
        <div className="about__desk">
          <div className="about__laptop">
            <div className="about__screen">
              <div className="about__screen-bar">
                <span className="about__dot" />
                <span className="about__dot" />
                <span className="about__dot" />
                <span className="about__screen-title">zeedev — index.js</span>
              </div>
              <div className="about__editor">
                <div className="about__editor-line">
                  <span className="about__ln">1</span>
                  <span>
                    <span className="about__kw">const</span>{' '}
                    <span className="about__prop">site</span>{' '}
                    <span className="about__pc">=</span>{' '}
                    <span className="about__br">{'{'}</span>
                  </span>
                </div>
                <div className="about__editor-line">
                  <span className="about__ln">2</span>
                  <span>
                    {'  '}
                    <span className="about__prop">name</span>
                    <span className="about__pc">: </span>
                    <span className="about__str">&quot;zeedev&quot;</span>
                    <span className="about__pc">,</span>
                  </span>
                </div>
                <div className="about__editor-line">
                  <span className="about__ln">3</span>
                  <span>
                    {'  '}
                    <span className="about__prop">role</span>
                    <span className="about__pc">: </span>
                    <span className="about__str">&quot;Software Developer&quot;</span>
                    <span className="about__pc">,</span>
                  </span>
                </div>
                <div className="about__editor-line">
                  <span className="about__ln">4</span>
                  <span>
                    {'  '}
                    <span className="about__prop">stack</span>
                    <span className="about__pc">: [</span>
                    <span className="about__str">&quot;React&quot;</span>
                    <span className="about__pc">, </span>
                    <span className="about__str">&quot;Node&quot;</span>
                    <span className="about__pc">],</span>
                  </span>
                </div>
                <div className="about__editor-line">
                  <span className="about__ln">5</span>
                  <span>
                    {'  '}
                    <span className="about__prop">focus</span>
                    <span className="about__pc">: </span>
                    <span className="about__str">&quot;details matter&quot;</span>
                    <span className="about__pc">,</span>
                  </span>
                </div>
                <div className="about__editor-line">
                  <span className="about__ln">6</span>
                  <span>
                    <span className="about__br">{'};'}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="about__deck" />
          </div>

          <div className="about__note">
            <span className="about__note-line" />
            <span className="about__note-line" />
            <span className="about__note-line" />
          </div>

          <div className="about__mug" />
        </div>
      </div>
    </div>
  )
}